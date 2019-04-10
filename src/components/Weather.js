import React from "react";

const Weather = props => (
		<div className="weather__info">
			{	//If city and country has value it displays <p> element
				props.city && props.country && <p className="weather__key"> Location: 
					<span className="weather__value"> {props.city }, {props.country }</span>
				</p> 
			}
			{ 	//If temperature  has value it displays <p> element
				props.temperature && <p className="weather__key"> Temperature: 
					<span className="weather__value"> {props.temperature }	</span>
				</p> 
			}
			{ 	//If humidity has value it displays <p> element
				props.humidity && <p className="weather__key"> Humidity: 
					<span className="weather__value"> {props.humidity } </span>
				</p> 
			}
			{ 	//If description has value it displays <p> element
				props.description && <p className="weather__key"> Conditions: 
					<span className="weather__value"> {props.description } </span>
			</p> 
			}
			{   //If error has value it displays <p> element
				props.error && <p className="weather__error">{props.error }</p>  
			}
		</div>
);

export default Weather;