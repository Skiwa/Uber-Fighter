Hope it's okay, that's the only code I could think of


So the platform is a **parodic** one, where you can find someone and fight him after a mutual agreement (like a Tinder-fight).


---
The part that could require your attention is the `MesCombats` (My fights) module in `src/components/mesCombats/`.
You can access it with the url : `localhost:3000/mesCombats` . (start it with `npm install` and `npm start`)

I've translated the comments and the content to english.

It's not finished yet, some fixes are to be done, features to be added and the design is not final.

Context : You've "matched" with potential opponents and your goal is to chat with them in order to choose a fight date and location (side panel).


Technologies:
- React.js + immutability-helper library
- Materialize.css
- SASS

Features :
- Filters
- Different conversations
- Read / Unread status
- Chat messages + info messages
- Fight propositions : 
	- Propose a fight
	- Accept/Refuse a fight
	- Declare a winner
	- Rate an opponent