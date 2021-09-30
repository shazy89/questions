import React from 'react'
import { percentage } from 'helpers/helper-functions'

export const BoxHeader = ({progress: {amountQuestions, questionNumber, correct}}) => {


    return (
        <div className="box-header">
            <div className="box-header-progress">
                Progress:
                <h4 className="box-header-progress_color">{`${questionNumber}/${amountQuestions}`}</h4>
            </div>
            <div className="box-header-procent">
                Percent Correct:
                <h4 className="box-header-procent_color">{`${percentage(correct, questionNumber)}%`}</h4>
            </div>
        </div>
    )
}
