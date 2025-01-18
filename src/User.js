// Separate file of User attributes. Allows us to return the <User/> tag in the App() function in App.js
export const User = (props) => {
    return (
        <div>
            {props.name} {props.email}
        </div>
    );
};