# React Dashboard 🤓

this is a react dashborad example built with no library other then react and no css framework i will try to make this dashboard extansible as possible and explain my desicions

## TODOs 🤯:

- Build Diffrent Layout OverView and DataList mockups
- Build OverView Component
- Build DataList Component
- Check for responsivnes another time
- Check for responsivnes
- enhance the ui => Css => Design
- Optimise the app (Speed , Memo , Keys , errors , logs , sepreate constants , clean up , comments)
- Update the Readme to showcase what i did

## Done 😊:

- Impliment the basic architecture
- Build the main app container (Header , sidebar , Main Layout)
- Build Header Components
- Build SideBar Components
- Build Routing systems for Dashboard

## Features 💊:

### Dashboard Router :

- Basicly the purpose of this dashboard is to build each compoent with out any library or framework beside react so for sure we need a router to navigate the dashboard pages so i implementded a dashboard router wich is inspired from react router dom api, this router dosen't use the window href link or window link to change location it dosn't entiract with any of that it uses an internal path to navigate pages and change component in the current view in the section i am gone present the router elements and how it does work it's highly reusable .

#### <DashBordRouter/> :

this component is the hoc or the parent component ,it uses the children api and context api and the useState Hook to inject the path state into the children components using the context API.

![alt text](https://i.imgur.com/N8fHE7i.png)
