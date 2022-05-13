## Map-legend
This is a React component that would be used as a legend in a map. 

## ⚠️ Process & Implementation

This repository was created with create-react-app. 

I have created [a Miro 🥚](https://miro.com/app/board/uXjVO2uh7_o=/) to help you get an idea of what was the thinking process behind the structure. And a [project in GitHub ✅](https://github.com/mariasola/map-legend/projects/1) to track the tasks.

I am using Ant Design & styled components for the design part. And Prop-types to control de properties trhough out the app. 

---

As said in the instructions I did all the mandatory requirements +  some of the optional. 
# Architecture & Data handling

As you can see in the Miro, I have made some decisions thinking of this as a scalable project, so that is why, for example you can see that I did MapView > MapContainer > LegendComponent. If it was only this component isolated, I would have not done this distinction, but I thought that it is a good way to leave things organised and scalable. The distribution is:
- View - all the logic.
- Container - that would have the menus/layouts + components
- Components - call all the elements and manage the logic that does not need to be in the view.
- Elements - they recieve props and style the elements to make them reusable. 

Regarding the data, the view is the one doing all the calls to the API and formatting the data to pass it though cascading until the elements. This has two main advantages: first is that whenever we want to change iformation we do it only in one place or if anytime anything changes in the texts we know that the view will handle it, and second that elements are completely dumb - they only know that a prop will come and they need to paint it. This is good because it makes them very reusable, and as in every application, for sure we will have to put them somewhere else where we don't know if they will recieve the same info. 

Finally I have made a small service doc to mock error handling. 
# Styles

As said before, scalability was the base of my thinking in this project. That is why I created:
- GlobalStyle: this would style the basics as background of the app, fonts, etc.
- Themes & map-theme: this is just to be sure that if, for example, the main color of the page changes, we only have to change it in one place.

For the rest I used Ant Design for the components, and styled-components to make them look as the mockups. 

# Challenges & Process

I really enjoyed creating something from scratch & thinking about how to organise it and make it readable and easy to maintain.

My biggest challenge has been the drag and drop, that I have left in a branch called "drag-and-drop" unfinalised, with only pending a re-render of the Collapsibles to work. To be transparent with you, I really think that his would have not been a challenge in other situation, but as I am working and in the midst of the develop of a new functionality that I am the owner of, has been really difficult to code for my actual job for 8 hours and then dedicate my brain to this challenge during another 2 or 3 a day. 

I don't want it to sound as an excuse or either as I am not interested enough, I just want to be clear about my situation and the why's behind the challenges I have faced. 

Another challenge that I faced was making the text in the modal of the info icon appear with a button that said "Read more" when it passed X amount of characters. This was not a requirement, but I think that would have been good for UX. I had this challenge because as I was using the "dagerouslySetInnerHTML" to parse the HTML coming from the backend, putting into it also a button with JS logic was not working, but I will definetly work on it again to see if I can do it. 

# Things that I couln't get to

As said before, I would have loved to have the "See more" button.

I think that it would have been nice to refactor a bit some UseStates and use other Hooks. 


---

Hope you enjoy it and I can explain more about it in a call!
