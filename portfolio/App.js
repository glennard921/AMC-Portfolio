import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const resumeData = {
    imageUrl: require('./profile.jpg'),
    name: 'Glennard B. Montero',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Lakan Dula Elementary Schoool',
      elementaryYear: '2012',
      juniorHighSchool: 'Lakan Dula High School',
      juniorHighSchoolYear: '2016',
      seniorHighSchool: 'Emmanuel John Institute of Science and Technology',
      seniorHighSchoolYear: '2018',
      college: 'Global Reciprocal Colleges',
      collegeYear: 'present',
    },
    about:
      'We were working on creating our portfolio using React Native today. We were supposed to finish this activity by 2:00 pm, but unfortunately, we could not complete it in time at our laboratory. However, our professor has kindly extended the deadline to 11:59 pm.',
    hobbies: {
      hobbiesName: 'Mobile Games',
      imageUrl: require('./mobileLegends.png'),
      description: 'arat ml tayo!',
    },
    hobbies1: {
      hobbiesName1: 'Basketball',
      imageUrl1: require('./basketball.avif'),
      description1: 'limahan 20 isa!',
    },
    contact: {
      mobile: '09473086361',
      email: 'glennard921@gmail.com',
    },
  };

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'hobbies';
        case 'hobbies':
          return 'hobbies1';
        case 'hobbies1':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          styles={styles.contentContainerStyle}>
          {currentSection === 'name' && (
            <>
              <Image source={resumeData.imageUrl} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{resumeData.name}</Text>
                <Text style={styles.course}>{resumeData.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View style={styles.eduContainer}>
              <Text style={styles.eduHeader}>Education:</Text>
              <Text style={styles.levelTitle}>
                {'\n'}College
                {'\n'}
              </Text>
              <Text style={styles.school}>{resumeData.education.college}</Text>
              {'| '}
              {resumeData.education.collegeYear}

              <Text style={styles.levelTitle}>
                {'\n'}Senior High School
                {'\n'}
              </Text>
              <Text style={styles.school}>
                {resumeData.education.seniorHighSchool}
              </Text>
              {'| '}
              {resumeData.education.seniorHighSchoolYear}

              <Text style={styles.levelTitle}>
                {'\n'}Junior High School
                {'\n'}
              </Text>
              <Text style={styles.school}>
                {resumeData.education.juniorHighSchool}
              </Text>
              {'| '}
              {resumeData.education.juniorHighSchoolYear}

              <Text style={styles.levelTitle}>
                {'\n'}Elementary
                {'\n'}
              </Text>
              <Text style={styles.school}>
                {resumeData.education.elementary}
              </Text>
              {'| '}
              {resumeData.education.elementaryYear}
            </View>
          )}

          {currentSection === 'about' && (
            <View style={styles.textContainer}>
              <Text style={styles.aboutHeader}>About Me:{'\n'}</Text>
              <Text style={styles.aboutText}>{resumeData.about}</Text>
            </View>
          )}


          {currentSection === 'hobbies' && (
            <View style={styles.hobbiesContainer}>
              <Text style={styles.hobbiesHeader}>Hobbies:{'\n'}</Text>
              <Text style={styles.hobbiesName}>{resumeData.hobbies.hobbiesName}</Text>
              <Image source={resumeData.hobbies.imageUrl } style={styles.hobbiesImage} />
              <Text style={styles.hobbiesDesc}>{resumeData.hobbies.description}</Text>
            </View>
          )}


         {currentSection === 'hobbies1' && (
            <View style={styles.hobbiesContainer}>
              <Text style={styles.hobbiesHeader}>Hobbies:{'\n'}</Text>
              <Text style={styles.hobbiesName1}>{resumeData.hobbies1.hobbiesName1}</Text>
              <Image source={resumeData.hobbies1.imageUrl1 } style={styles.hobbiesImage1} />
              <Text style={styles.hobbiesDesc1}>{resumeData.hobbies1.description1}</Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style={styles.contactContainer}>
              <Text style={styles.contactHeader}>Contact Me:{'\n'}</Text>
              <Text style={styles.contactInfo}>
              {resumeData.contact.mobile}
              {'\n'}
              {resumeData.contact.email}
              </Text>

            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'grey',
      },
  contentContainerStyle: {
    alignItems: 'center',
    maxWidth: 600,
  },
  textContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  name:{
    fontSize: 25,
    fontFamily: 'Calibri',
    color: 'white',
    fontWeight: 'Bold',
  },
  course:{
    fontSize: 15,
    fontFamily: 'Calibri',
    color: 'black',
    fontWeight: 'Bold',
  },

  eduContainer:{
    alignItems: 'left',
  },
  eduHeader:{
    fontWeight: 'Bold',
    fontSize: 30,
    color: 'white',
  },
  levelTitle:{
    fontWeight: 'Bold',
    fontSize: 25,
    color: 'Black',
  },
  school:{
    fontWeight: 'Bold',
    fontSize: 20,
    color: 'white',
  },
  aboutHeader:{
    fontWeight: 'Bold',
    fontSize: 30,
    color: 'white',
  },
  aboutText:{
    fontWeight: 'Bold',
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },

hobbiesContainer:{
  justifyContent: 'center',
    alignItems: 'center',
},
  hobbiesHeader:{
    fontWeight: 'Bold',
    fontSize: 30,
    color: 'white',
  },
  hobbiesName:{
    fontWeight: 'Bold',
    fontSize: 20,
    color: 'black',
  },
  hobbiesImage:{
    width: 150,
    height: 150,
  },
  hobbiesDesc:{
    fontWeight: 'Bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  hobbiesName1:{
    fontWeight: 'Bold',
    fontSize: 20,
    color: 'black',
  },
  hobbiesImage1:{
    width: 300,
    height: 150,
  },
  hobbiesDesc1:{
    fontWeight: 'Bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },

  contactHeader:{
    fontWeight: 'Bold',
    fontSize: 30,
    color: 'white',
  },
  contactInfo:{
    fontWeight: 'Bold',
    fontSize: 20,
    color: 'black',
  }

})
export default App;
