function(instance, properties, context) {
    
    var script3 = document.createElement('script');
    script3.src = 'https://unpkg.com/jalaali-js/dist/jalaali.js';
    

    script3.onload = function() {
    // Initialize the Persian date picker
       $(document).ready(function() {
        $('.observer-example').persianDatepicker({
            initialValue: false,
            observer: true,
            format: 'YYYY/MM/DD',
            altFormat: 'X',  // Use 'X' for Unix timestamp
            altField: '.observer-example-alt',
            onSelect: function() {
              // Get the value of the input
              var selectedDateValue = document.getElementById('persian-date-picker').value;
             	console.log(Number(selectedDateValue));
               var res = new Date(Number(selectedDateValue)* 1000);
              
               instance.publishState('selected_date', res);
                



            }
        });


        // Update the altField dynamically when the date changes
        $('.observer-example').on('change', function() {
            var selectedDate = $(this).persianDatepicker('getState').selected.unixDate;

        });
           
           
});
  };
      document.head.appendChild(script3);
	

}

