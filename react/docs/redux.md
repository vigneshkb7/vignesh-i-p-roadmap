# difference between redux thunk and redux saga

Both redux and sage dealing with side effects

## Thunk

uses Promises

thunk deals with more complex cases

## Saga

saga has two function in the saga file that is watcher and workers

watchers --> will always look for the actions

workers --> will work to fetch the api response and dispatch using put to the redux store.

uses generators

saga provides more tools for the complex cases

easier to test
