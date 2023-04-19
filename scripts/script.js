const toggleButton = document.querySelector('.toggle-menu');
const navigation = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
  navigation.classList.toggle('menu-open');
});

// document.querySelector('.save_pin').addEventListener('click', () => {
//   const users_data = {
//       author: 'Jack',
//       board: 'default',
//       title: document.querySelector('#pin_title').value,
//       description: document.querySelector('#pin_description').value,
//       destination: document.querySelector('#pin_destination').value,
//       img_blob: pin_image_blob,
//       pin_size: document.querySelector('#pin_size').value
//   }

//   create_pin(users_data);
//   reset_modal();
// });


// Define an array of pin details
// const pinDetails = [
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 1',
//       description: 'This is pin number 1',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_5.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 2',
//       description: 'This is pin number 2',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_6.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 3',
//       description: 'This is pin number 3',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_8.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 4',
//       description: 'This is pin number 4',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_4.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 5',
//       description: 'This is pin number 5',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_9.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 6',
//       description: 'This is pin number 6',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_12.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 7',
//       description: 'This is pin number 7',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_1.jpeg',
//       pin_size: 'small'
//     },
//     {
//       author: 'John',
//       board: 'my_board',
//       title: 'Pin 8',
//       description: 'This is pin number 8',
//       destination: 'https://example.com',
//       img_blob: 'imgs/packaging_img_3.jpeg',
//       pin_size: 'small'
//     }
//   ];
  
//   // Loop through each pin container and create a pin with the corresponding details
//   const pinContainers = document.querySelectorAll('.pin-container');
  
//   pinContainers.forEach((pinContainer, index) => {
//     const pinDetailsForContainer = pinDetails[index];
    
//     // Create a new img element
//     const imgElement = document.createElement('img');
    
//     // Set the src attribute to the img_blob property of the pin_details object
//     imgElement.src = pinDetailsForContainer.img_blob;
    
//     // Set the alt attribute to the pin title
//     imgElement.alt = pinDetailsForContainer.title;
    
//     // Set the innerHTML of the div container to the img element
//     pinContainer.innerHTML = imgElement.outerHTML;
    
//     // Create the pin
//     create_pin(pinDetailsForContainer);
//   });