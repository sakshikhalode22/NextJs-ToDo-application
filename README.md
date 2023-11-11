This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

## Getting Started

Follow the below link for cloning Repo
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

After cloning Repo:

```bash
git fetch origin
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project

It is a simple todo application where user can add/delete and complete tasks.

We are using nested parent-child component with and without props

1: page.js file

In this page, there is heading and subheading hardcoded and nesting child component named as AddTask by importing exported component.

2: pages/AddTasks.js

The purpose of this component to add task into list and send it to next child component named as AllTasks

As React follow one way data binding, it need to handle data by event therefore we are using state management here

step 1: create states for input, set task in array

inputChange will be triggered onChange event when user try to type enything in input

once user hit add button it will trigger onClick event called as handleSubmit. In this, we are creating new object with completed=false value and new task and setting that object in respective array state.

step 2: Nesting child component called as AllTasks

In above child component we are sending some data and methods in form of props.

step 3: when user click or trigger any event it will show user messsage for 4 sec

Used useEffect with success message state dependancy where these message will invisible after 4 sec.

3:pages/AllTasks.js

step 1:Initially we are frtching all tasks from props

step 2:created 2 state for pending and completed task

step 3: created useEffect which will differentiate between completed and pending task by using filter()
It will render only if there is changes in allTaks

step 4: Mapped those above two steps in two grid using map().
And if there is no tasks it will show respective message.

step 5: When user hit button for completed or delete it will trigger onClick event and those event are passed from props to this component

handleComplete() will make changes in state of that event as completed = true

handleDelete() will remove that task object

step 6: clear All button will clear all task regardless of pending and completed.
Once user click on button onClick event will hit handleDeleteAll method and prompt user if they want to delete all tasks, if yes it will set [] array in state and if there is no data it will alert user.

```

Hooks used: useState and useEffect
UI designed with MaterialUI and CSS


```
