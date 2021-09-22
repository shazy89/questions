import React from 'react'

export const BoxHeader = () => {
    return (
        <div className="box-header">
            <div classNam="box-header-progress">
                Progress:
                <h4 className="box-header-progress_color">10/11</h4>
            </div>
            <div classNam="box-header-procent">
                Percent Correct:
                <h4 className="box-header-procent_color">0%</h4>
            </div>
        </div>
    )
}
