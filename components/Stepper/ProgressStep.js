import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';
import colorData from '../../data/color.json';
import ProgressButtons from './ProgressButtons';
import ProgressButtonNoPrev from './ProgressButtonNoPrev';
const width = Dimensions.get("window").width;

class ProgressStep extends Component {
    onNextStep = async () => {
        this.props.onNext && (await this.props.onNext());

        // Return out of method before moving to next step if errors exist.
        if (this.props.errors) {
            return;
        }

        this.props.setActiveStep(this.props.activeStep + 1);
    };

    onPreviousStep = () => {
        // Changes active index and calls previous function passed by parent
        this.props.onPrevious && this.props.onPrevious();
        this.props.setActiveStep(this.props.activeStep - 1);
    };

    onSubmit = () => {
        this.props.onSubmit && this.props.onSubmit();
    };

    renderNextButton = () => {
        const btnStyle = {
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: width - 48,

            borderRadius: 8,
            backgroundColor: colorData.brandColor.primary,
            ...this.props.nextBtnStyle,
        };

        const btnTextStyle = {
            color: colorData.neutralColor.lightest,
            fontSize: 18,
            fontFamily: 'Arial',
            ...this.props.nextBtnTextStyle,
        };

        const disabledBtnText = {
            color: colorData.neutralColor.dark,
            fontFamily: 'Arial'
        };

        let textStyle = [btnTextStyle];
        if (this.props.nextBtnDisabled) textStyle.push(disabledBtnText);

        return (
            <TouchableOpacity
                style={btnStyle}
                onPress={
                    this.props.activeStep === this.props.stepCount - 1
                        ? this.onSubmit
                        : this.onNextStep
                }
                disabled={this.props.nextBtnDisabled}
            >
                <Text style={textStyle}>
                    {this.props.activeStep === this.props.stepCount - 1
                        ? this.props.finishBtnText
                        : this.props.nextBtnText}
                </Text>
            </TouchableOpacity>
        );
    };

    renderPreviousButton = () => {
        const btnStyle = {
            justifyContent: "center",
            alignItems: "center",
            width: width - 48,
            height:60,
            borderRadius: 8,
            borderColor:colorData.brandColor.primary,
            borderWidth: 1,
            backgroundColor: colorData.neutralColor.lightest,
            ...this.props.previousBtnStyle,
        };

        const btnTextStyle = {
            color: colorData.brandColor.primary,
            fontSize: 18,
            fontFamily: 'Arial',
            ...this.props.previousBtnTextStyle,
        };

        const disabledBtnText = {
            color: colorData.neutralColor.dark,
            fontFamily: 'Arial',
        };

        let textStyle = [btnTextStyle];
        if (this.props.previousBtnDisabled) textStyle.push(disabledBtnText);

        return (
            <TouchableOpacity
                style={btnStyle}
                onPress={this.onPreviousStep}
                disabled={this.props.previousBtnDisabled}
            >
                <Text style={textStyle}>{this.props.previousBtnText}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        const scrollViewProps = this.props.scrollViewProps || {};
        const viewProps = this.props.viewProps || {};
        const isScrollable = this.props.scrollable;
        let buttonRow;
        if (this.props.removeBtnRow) {
            buttonRow = null;
        } else {
            if (this.props.activeStep === 0) {
                buttonRow = (
                    <ProgressButtonNoPrev
                        renderNextButton={this.renderNextButton}
                    />
                );
            } else {
                buttonRow = (
                    <ProgressButtons
                        renderNextButton={this.renderNextButton}
                        renderPreviousButton={this.renderPreviousButton}
                    />
                );
            }
        }

        return (
            <View style={{ flex: 1 }}>
                {isScrollable ? (
                    <ScrollView {...scrollViewProps}>
                        {this.props.children}
                    </ScrollView>
                ) : (
                    <View {...viewProps}>{this.props.children}</View>
                )}

                {buttonRow}
            </View>
        );
    }
}


ProgressStep.defaultProps = {
    nextBtnText: 'Proceed',
    previousBtnText: 'Go Back',
    finishBtnText: 'Save and Proceed',
    nextBtnDisabled: false,
    previousBtnDisabled: false,
    errors: false,
    removeBtnRow: false,
    scrollable: true,
};

export default ProgressStep;