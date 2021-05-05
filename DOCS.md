# Documentation

Hi! 👋

Thanks for taking a look at this homework assignment.

## Running the code
This will go up on codesandbox, as assigned, but if you're forking this from github you can spin up the app with:
```
npm run start
```

## Implementation Details

### Redux Store / Managing Data
For this exercise, I used redux to manage the application's state. I haven't yet gotten a chance to mess around with hooks in react, but it's on my to-do list of things to learn!

You'll find that there are a lot of data manipulation functions that rely on quiz title. In leiu of unique IDs for objects, I had to rely on the assumption that titles for quizzes and questions were unique.

Another interesting detail about the way the store is set up is that I've chosen to store references to the array positions of questions and quizzes, in order to keep track of which quizzes and questions are active. This is a bit of a naive solution. When working with larger data sets, real databases, and real APIs, I might have chosen to combine several data structures into a de-normalized, document-based model. For example, each user could have an array of "remaining questions" to answer for a quiz, and changing states would be as simple as popping an answer off of the stack. Implementing the "array position" method, I was able to navigate quizzes and questions without duplicating too much data in memory, or editing the basic data itself.

### Delighters
I implemented delighters B and C. I found that with the way I structured my code, the application's redux store, and the various utility functions, it was easy to extend the code to allow test retakes, as well as show past answers.

### Comments
I've documented points of interest, as much as possible, in the code. You'll find informal documentation there about each component's responsibilities, potential edge cases, assumptions,and more.


## Future Improvements
Of course, there's a lot of things I'd like to do differently given more time:
- Implement answers/choices as accessible form elements
- More type checking and defensive programming, using proptypes or similar
- Specifying ComponentShouldUpdate for each component, for performance reasons
- Creating more granular, "dumber" components.
  - Many of the components need to know a lot about the app's state, we can tighten that up
  - Not all components need to extend React.component, and writing purely functional components can be a big performance booster
- There's a bug where you can create an invalid state by rapidly clicking choices on a single question.
