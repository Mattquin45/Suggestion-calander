import { StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf'
});


export const styles = StyleSheet.create({
  page: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#a8c3d0',
    fontFamily: 'Roboto'
   
   
  },
  
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  },
  card: {
    width: 250,
    height: 170,
    border: '2pt solid #A9A9A9',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#ffffff',
  },
  dayTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",

  },
  label: {
    paddingBottom: 15,
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    width: 20,
  },
  tinyDivider: {
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 5,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // or use margin if `gap` doesn't work in PDF renderer
  },
  textRow: {
    fontSize: 12,
    marginTop: -10
  },
  titleTxt: {
    fontSize: 15.5,
  },

  DescriptionTxt:{
    fontSize: 13,
    marginTop: 10,
    color: '#808080'
  },
  BigDivider: {
    width: 500,
    borderBottomWidth: 1,
    borderBottomColor: '#7a7e7c',
    alignSelf: 'center'
  },
});

