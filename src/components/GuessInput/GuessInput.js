import React from "react";

function GuessInput({ handleSubmitGuess, status }) {
	const [tentativeGuess, setTentativeGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();

		console.log({ guess: tentativeGuess });

		handleSubmitGuess(tentativeGuess);

		setTentativeGuess("");
	}

	return (
		<form onSubmit={handleSubmit} className="guess-input-wrapper">
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required={true}
				id="guess-input"
				type="text"
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				value={tentativeGuess}
				disabled={status !== "running"}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
			/>
		</form>
	);
}

export default GuessInput;
