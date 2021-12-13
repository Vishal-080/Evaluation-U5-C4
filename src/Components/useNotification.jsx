// const { successNotification, failureNotification } = useNotification();
// const onSuccess = () => {
//   successNotification( "ABC", 2000)
//   // it will show ABC for 2 seconds
// }

export function useNotification() {
  setTimeout(function () {
    alert("Successfully Registered");
  }, 6000);
}
