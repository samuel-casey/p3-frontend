import React from 'react'
import './AppDescription.scss'

export default function AppDescription() {

    return(
        <div className="description-section">
            <h3>Keeps track of:</h3>
            <div className="description">
                <div className="activity">
                    <div className="icon">
                        <i class="fas fa-clipboard-list"></i>
                    </div>
                    <p className="wording">
                        Wishlist of Activities
                    </p>
                </div>
                <div className="activity">
                    <div className="icon">
                        {/* <i class='fas fa-check'></i> */}
                        <i class="fas fa-clipboard-check"></i>
                    </div>
                    <p className="wording">
                        Self-care Activities You Completed
                    </p>
                </div>
                <div className="activity">
                    <div className="icon">
                        <i class='far fa-star'></i>
                    </div>
                    <p className="wording">
                        Self-care Activities You Liked Best
                    </p>
                </div>
                <div className="activity">
                    <div className="icon">
                        <i class="far fa-heart"></i>
                    </div>
                    <p className="wording">
                        Motivational Quotes That Inspire You
                    </p>
                </div>

            </div>
        </div>
    )
}