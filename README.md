# React Google Places Library
A straight forward react npm package, using the google places API to easily search for places. Easy to integrate, more faster to use. Comes with a ready made search input component.


```
npm install --save rgpl
```

## Getting Started

The React Google Places Library can be loaded as:

-   install the package
-   import *Search* component from the library.


## Sample code on how to use

```
            <Search 
              inputStyle= {{
                width: '100%'
              }}
              placesOption= {{
                types: ["address"],
                componentRestrictions: { country: "ng" }
              }}
              apiKey={`place your API key here`}
              fields={['address_components', 'formatted_address']} 
              containerStyle = {{
                height: 48,
                display: 'flex',
                justifyContent: 'space-between'            
              }}
              inputContainer = {{
                margin: 'auto 16px',
                width: 'calc(100% - 48px - 32px)'
              }}
              callbackFromParent={this.myCallback}
              value={this.state.city}
               />
```


## Features

- [placesOption](#placesOption)
- [fields](#fields)
- [apiKey](#apiKey)
- [callbackFromParent](#callbackFromParent)
- [value](#value)
- [inputStyle](#inputStyle)
- [inputContainer](#inputContainer)
- [containerStyle](#containerStyle)



# Props

## placesOption
This represents the option argument on the Google places API. This should be an object.

```
            <Search 
              placesOption= {{
                types: ["address"],
                componentRestrictions: { country: "ng" }
              }}
               />
```

[Read more](https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete)


## fields
This represents the *setFields* widget on the Google places API. This should be an array.

```
            <Search 
              fields={['address_components', 'formatted_address']} 
               />
```

[Read More](https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.setFields)


## API Key (apiKey)
Google API key. Generate your Google API key. Pass it as a string.

```
            <Search 
              apiKey={`place your API key here`}
               />
```


## callbackFromParent
This props is very compulsory and important to get the places information selected from the list from the child component.

Created a method on your component:

```
  myCallback = (dataFromChild1, dataFromChild2) => {
    this.setState({ city: dataFromChild1, query: dataFromChild2 });
    }
```

If you want not only the city from the API, you can get the rest of the information from the query component state, or the dataFromChild2 params.

Next pass the method as props to the *Search* component

```
            <Search 
              callbackFromParent={this.myCallback}
               />
```


## value
Represents what will be displayed on the input box as the user and types, and also represents the location or address selected.

```

            <Search 
              value={this.state.city}
               />
```


## inputStyle
Search component accepts an input style props that styles inside input component

```
            <Search 
              inputStyle= {{
                width: '100%',
                backgroundColor: blue
              }}
               />
```

## inputContainer
Search Component also accepts an inputContainer props for styling around the input box

```
            <Search 
              inputContainer = {{
                margin: 'auto 16px',
                width: 'calc(100% - 48px - 32px)'
              }}
               />

```

## containerStyle 
Search Component also accepts a containerStyle props for styling outside or around the input box. It represents
the box around the inputContainer props.

```
            <Search 
              containerStyle = {{
                height: 48,
                display: 'flex',
                justifyContent: 'space-between'            
              }}
               />
```

## License

Copyright 2020 Anayo Oleru
MIT License

