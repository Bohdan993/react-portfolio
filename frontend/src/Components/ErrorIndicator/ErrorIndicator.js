import React from 'react'
import './ErrorIndicator.css'

const ErrorIndicator = () => {
	return (
			<div className="error-indicator">
				<span className="boom">BOOM!</span>
				<span>
					something has gone terribly wrong
				</span>
				<span>
					(but we have already set specialists to fix it)
				</span>
			</div>
		)
}

export default ErrorIndicator