function(instance, context) {
    
    
    
        // Include jQuery and Persian date picker scripts
  var script1 = document.createElement('script');
  script1.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  document.head.appendChild(script1);
  
    
    
  // Create a container for the date picker
  var container = document.createElement('div');
  container.id = 'date-picker-container-' + instance.data.uniqueId;
  container.style.width = '100%';
  
  instance.canvas.append(container);
  
  // Create the input element for date
  var input = document.createElement('input');
  input.type = 'hidden';
  input.className = 'observer-example-alt';
  input.id = 'persian-date-picker';
  input.style.width = '100%';  // Adjust width as needed
  input.style.padding = '10px';  // Adjust padding as needed
  input.style.boxSizing = 'border-box';  // Make sure padding is included in the total width

    
  var input1 = document.createElement('input');
  input1.type = 'text';
  input1.className = 'observer-example';
  input1.id = 'persian-date-picker-id';
  input1.style.width = '100%';  // Adjust width as needed
  input1.style.padding = '10px';  // Adjust padding as needed
  input1.style.boxSizing = 'border-box';  // Make sure padding is included in the total width

    
    
  container.appendChild(input);

    
  container.appendChild(input1);
  
  
    
 var script2 = document.createElement('script');
  script2.src = 'https://cdn.jsdelivr.net/npm/persian-datepicker/dist/js/persian-datepicker.min.js';
  document.head.appendChild(script2);
 
  
  // Include Persian date picker CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/persian-datepicker/dist/css/persian-datepicker.min.css';
  document.head.appendChild(link);
}
