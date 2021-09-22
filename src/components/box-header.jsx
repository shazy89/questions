import React from 'react'


export const BoxHeader = ({progress: {amountQuestions, questionNumber}}) => {

//const correctQuestions = (correct,numberQuestions ) => {
//
//    return (correct / numberQuestions) * 100
//}
    return (
        <div className="box-header">
            <div className="box-header-progress">
                Progress:
                <h4 className="box-header-progress_color">{`${questionNumber}/${amountQuestions}`}</h4>
            </div>
            <div className="box-header-procent">
                Percent Correct:
                <h4 className="box-header-procent_color">10%</h4>
            </div>
        </div>
    )
}
