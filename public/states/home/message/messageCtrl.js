angular.module('mutt-match')
.controller('messageCtrl', ['messageService', function(messageService) {
  const vm = this;
  vm.click = click;
  vm.messages = [];


  function click() {
    messageService.getMessages()
    .then((response) => {
      console.log('hello', response);
      for (var i = 0; i < response.data.length; i++) {
        vm.messages.push(response.data[i]);
      }

      console.log(vm.messages);
    })
    .catch((error) => {
      console.log('error', error);
    })
    
  }
}])