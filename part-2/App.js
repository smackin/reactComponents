// Part 2
// Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

// Create an App component that renders at least three tweets.

function App() {
    return (
      <div>
        <Tweet
          name="Matt Lane"
          username="mmmaaatttttt"
          date={new Date().toDateString()}
          message="This app is the best!!"
        />
        <Tweet
          name="Elie Schoppik"
          username="eschoppik"
          date={new Date().toDateString()}
          message="I love my pupper! "
        />
        <Tweet
          name="Tim Garcia"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    );
  }