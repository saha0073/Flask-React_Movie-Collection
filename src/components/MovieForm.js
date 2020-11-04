import React, { useState } from "react";
import { Form, Input, Rating, Button } from "semantic-ui-react";
//import { Text, StyleSheet } from 'react-native'
//import { Helmet } from 'react-helmet'
const TITLE=' My Movie'
export const MovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  //console.log('onNewMovie  '+typeof(onNewMovie))
  return (
    
    <Form>
      
      {/*<Text style={StyleSheet.titleText}> test </Text>*/}
      <Form.Field >
        
        
        <Input
          placeholder="movie title"
          style={{width: "420px"}}
          value={title}
          onChange={e => 
            setTitle(e.target.value)
          //console.log(typeof(title))
        }
      
        />
        
      </Form.Field>
      
      <Form.Field>
        <Rating
          icon="star"
          rating={rating}
          maxRating={5}
          onRate={(_, data) => {
            setRating(data.rating);
            //console.log(data)
          }}
        />
      </Form.Field>
      
      <Form.Field>
        <Button
          onClick={async () => {
            const movie = { title, rating };
            //console.log(title+','+rating)
            const response = await fetch("/add_movie", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(movie)
            });

            if (response.ok) {
              console.log("response worked!");
              
              
              onNewMovie(movie);
              //console.log('onNewMovie  '+typeof(onNewMovie))
              setTitle("");
              setRating(1);
              
              
            }
          }}
        >
          add
        </Button>
      </Form.Field>
        
    </Form>
  );
};
