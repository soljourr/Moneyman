var trash = document.getElementsByClassName("fa-dumpster-fire");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const billDate = this.parentNode.parentNode.childNodes[1].innerText
        const billName = this.parentNode.parentNode.childNodes[3].innerText
        const billAmount = this.parentNode.parentNode.childNodes[5].innerText
        fetch('bills', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'billDate': billDate,
            'billName': billName,
            'billAmount': billAmount
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
