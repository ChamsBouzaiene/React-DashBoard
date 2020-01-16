# React Dashboard 🤓

this is a react dashborad example built with no library other then react and no css framework i will try to make this dashboard extansible as possible and explain my desicions

## TODOs 🤯:

- Write Some Tests
- enhance the ui => Css => Design
- Optimise the app (Speed , Memozation , Keys , errors , logs , sepreate constants , clean up , comments)

## Done 😊:

- Impliment the basic architecture
- Build the main app container (Header , sidebar , Main Layout)
- Build Header Components
- Build SideBar Components
- Build Routing systems for Dashboard
- Build Flights Page
- Fix Cursors and some designee issues
- Build Hotels Page
- Build SliderBullet component
- Fix Css

## Features 💊:

### Dashboard Router :

- Basicly the purpose of this dashboard is to build each compoent without any library or framework beside react. so for sure we need a router to navigate the dashboard pages so i implementded a dashboard router wich is inspired from react router dom api, this router dosen't use the window href link or window link to change location it dosn't interact with any of that it uses an internal path to navigate pages and change component in the current view in the section i am gone present the router elements and how it does work it's highly reusable .

#### DashBordRouter Component:

this component is the hoc or the parent component ,it uses the children api and context api and the useState Hook to inject the path state into the children components using the context API.

![alt text](https://i.imgur.com/N8fHE7i.png)

#### Router Component:

Router Component is a hoc that wraps the Route components and basicly what it does is it grabes all the route
Components and check wich of them has a prop to that correspand to the current path it make use of the RouterContext api and the react children API

![alt text](https://i.imgur.com/pumhDj9.png)

#### Route Component:

Route Component is only an interface to add another layer on top of components insider the RouterContext to make a clearer and more maintainable and reusable Routing Module

#### Link Component:

Link Component is the component that redirects the page to another view if clicked it basicly change the path global state throught the context api and react state event delegation principale

![alt text](https://i.imgur.com/Pnd3628.png)

---

### Dashboard Flights Page :

A page that present a list of flights in elegant minimalistic data table

### Dashboard Hotels Page :

A page that present a list of hotels and filters in a css intensive layout

### SliderBullet component :

a component that i built for the slidding effect of the filters and this component can be utilized
to increase or decrease state variables to create a beautiful transition effects
