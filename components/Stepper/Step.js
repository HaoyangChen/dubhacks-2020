import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import colorData from '../../data/color.json';

class Step extends Component {
    render() {
        let styles;

        if (this.props.isActiveStep) {
            styles = {
                circleStyle: {
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: this.props.activeBackgroundColor,
                },
                circleText: {
                    alignSelf: 'center',
                    top: 3 / 2,
                    fontSize: 16,
                    color:colorData.neutralColor.lightest,
                },
                labelText: {
                    textAlign: 'center',
                    flexWrap: 'wrap',
                    width: 100,
                    paddingTop: 8,
                    fontFamily: this.props.labelFontFamily,
                    color: this.props.activeLabelColor,
                    fontSize: this.props.labelFontSize,
                },
                leftBar: {
                    position: 'absolute',
                    top: 18 / 2,
                    left: 0,
                    right: 36 + 8,
                    borderTopStyle: "solid",
                    borderTopWidth: 1,
                    borderTopColor: this.props.completedProgressBarColor,
                    marginRight: 36 / 2 + 2,
                },
                rightBar: {
                    position: 'absolute',
                    top: 18 / 2,
                    right: 0,
                    left: 36 + 8,
                    borderTopStyle: "solid",
                    borderTopWidth: 1,
                    borderTopColor: this.props.progressBarColor,
                    marginLeft: 36 / 2 + 6,
                },
                stepNum: {
                    color: colorData.neutralColor.lightest,
                },
            };
        } else if (this.props.isCompletedStep) {
            styles = {
                circleStyle: {
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: colorData.brandColor.primaryLighter,
                },
                circleText: {
                    alignSelf: 'center',
                    top: 3 / 2,
                    fontSize: 16,
                },
                labelText: {
                    textAlign: 'center',
                    flexWrap: 'wrap',
                    width: 100,
                    paddingTop: 4,
                    fontFamily: this.props.labelFontFamily,
                    color: this.props.completedLabelColor,
                    marginTop: 4,
                    fontSize: this.props.labelFontSize,
                },
                leftBar: {
                    position: 'absolute',
                    top: 18 / 2,
                    left: 0,
                    right: 36 + 8,
                    borderTopStyle: "solid",
                    borderTopWidth: 1,
                    borderTopColor: this.props.completedProgressBarColor,
                    marginRight: 36 / 2 + 4,
                },
                rightBar: {
                    position: 'absolute',
                    top: 18 / 2,
                    right: 0,
                    left: 36 + 8,
                    borderTopStyle: "solid",
                    borderTopWidth: 1,
                    borderTopColor: this.props.completedProgressBarColor,
                    marginLeft: 36 / 2 + 4,
                },
                stepNum: {
                    color: this.props.completedStepNumColor,
                },
            };
        } else {
            styles = {
                circleStyle: {
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    borderWidth: 0,
                    borderColor: this.props.disabledStepIconBorderColor,
                    backgroundColor: colorData.neutralColor.light,
                },
                circleText: {
                    alignSelf: 'center',
                    top: 3 / 2,
                    fontSize: 16,
                    color:colorData.neutralColor.lightest,
                },
                labelText: {
                    textAlign: 'center',
                    flexWrap: 'wrap',
                    width: 100,
                    paddingTop: 4,
                    fontFamily: this.props.labelFontFamily,
                    color: this.props.labelColor,
                    marginTop: 4,
                    fontSize: this.props.labelFontSize,
                    color:colorData.neutralColor.darker,
                },
                leftBar: {
                    position: 'absolute',
                    top: 18 / 2,
                    left: 0,
                    right: 36 + 8,
                    borderTopStyle: "solid",
                    borderTopWidth: 1,
                    borderTopColor: this.props.progressBarColor,
                    marginRight: 36 / 2 + 6,
                },
                rightBar: {
                    position: 'absolute',
                    top: 18 / 2,
                    right: 0,
                    left: 36 + 8,
                    borderTopStyle: "solid",
                    borderTopWidth: 1,
                    borderTopColor: this.props.progressBarColor,
                    marginLeft: 36 / 2 + 6,
                },
                stepNum: {
                    color: this.props.disabledStepNumColor,
                },
            };
        }

        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.circleStyle}>
                    <Text style={styles.circleText}>
                        {this.props.isCompletedStep ? (
                            <Text
                                style={{
                                    color: this.props.completedCheckColor,
                                }}
                            >
                                &#10003;
                            </Text>
                        ) : (
                            <Text style={styles.stepNum}>
                                {this.props.stepNum}
                            </Text>
                        )}
                    </Text>
                </View>
                <Text style={styles.labelText}>{this.props.label}</Text>
                {!this.props.isFirstStep && <View style={styles.leftBar} />}
                {!this.props.isLastStep && <View style={styles.rightBar} />}
            </View>
        );
    }
}

Step.propTypes = {
    stepCount: PropTypes.number.isRequired,
    stepNum: PropTypes.number.isRequired,
    isFirstStep: PropTypes.bool.isRequired,
    isLastStep: PropTypes.bool.isRequired,

    borderWidth: PropTypes.number,
    borderStyle: PropTypes.string,
    disabledStepIconBorderColor: PropTypes.string,
    activeBackgroundColor: PropTypes.string,

    progressBarColor: PropTypes.string,
    completedProgressBarColor: PropTypes.string,

    activeStepIconColor: PropTypes.string,
    disabledStepIconColor: PropTypes.string,
    completedStepIconColor: PropTypes.string,

    labelFontFamily: PropTypes.string,
    labelColor: PropTypes.string,
    labelFontSize: PropTypes.number,
    activeLabelColor: PropTypes.string,
    activeLabelFontSize: PropTypes.number,
    completedLabelColor: PropTypes.string,

    activeStepNumColor: PropTypes.string,
    disabledStepNumColor: PropTypes.string,

    completedCheckColor: PropTypes.string,
};

Step.defaultProps = {
    borderWidth: 1,
    borderStyle: "solid",
    disabledStepIconBorderColor: colorData.neutralColor.light,
    activeBackgroundColor: colorData.brandColor.primaryLighter,

    progressBarColor: colorData.neutralColor.dark,
    completedProgressBarColor: colorData.brandColor.primaryLighter,

    activeStepIconColor: colorData.neutralColor.lightest,
    completedStepIconColor: colorData.neutralColor.lightest,
    disabledStepIconColor: colorData.neutralColor.dark,

    labelColor: colorData.neutralColor.dark,
    labelFontSize: 16,
    activeLabelColor: colorData.brandColor.primaryLighter,
    completedLabelColor: colorData.neutralColor.dark,

    activeStepNumColor: colorData.neutralColor.lightest,
    disabledStepNumColor: colorData.neutralColor.dark,

    completedCheckColor: colorData.neutralColor.lightest,
};

export default Step;