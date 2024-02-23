# IP Address Tracker

IP Address Tracker is a web application built using HTML, CSS, JavaScript, and the Google Maps JavaScript API. It allows users to track the geographical location and other details of any given IP address using the IPGeolocation API.

## Features

- **IP Address Tracking**: Enter an IP address in the search box to retrieve information such as the location, timezone, and ISP.
- **Interactive Map**: Visualize the location of the IP address on an interactive map powered by the Google Maps API.
- **Third-party API Integration**: Utilizes the IPGeolocation API to fetch detailed information about the IP address.
- **Error Handling**: Provides feedback for invalid IP addresses and displays an error message to the user.
- **Responsive Design**: The application is designed to work seamlessly across various devices and screen sizes.

## Technologies Used

- HTML5
- CSS3 (Flexbox layout)
- JavaScript (ES6+)
- Google Maps JavaScript API
- Axios (for making HTTP requests)

## Usage Note

Please note that due to API restrictions, the application can only be fully functional when accessed through GitHub Pages. This is because both the Google Maps JavaScript API and the IPGeolocation API used in this project may have usage limitations or require specific access credentials.

- **Limited IPv6 Support**: Some types of IPv6 addresses may not be available due to the limitations of the free subscription to the IPGeolocation API.
- **No Domain Search Option**: Currently, the application only supports searching by IP address. The option to search by domain name is not available due to API restrictions.

To access the live version of the application, visit (https://mediteran2910.github.io/Ip-Address-Tracker/).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

