import PropTypes from 'prop-types';

// const newMessage = {
//   messaga: 'Hello World',
//   title: 'Moises'
// };

// const Name = () =>{
//   return 'Moises';
// };

export const FirstApp = ( { title, subTitle, name } ) => {
 
  //Use fragment (<> </>) to agroup elements
  return (
    <>
      <h1> { title } </h1>
      <h1> { name } </h1>
      {/* <code> {  JSON.stringify( newMessage ) } </code> */}
      <p> { subTitle } </p>
    </>
  )

}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  name: "Moises",
  subTitle: 1234,
  title: "No have title",
}
