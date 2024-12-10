import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  RefreshControl,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const jobListings = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Airbnb",
      location: "California, USA",
      type: "Full time",
      salary: "$450/Mo",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Google",
      location: "New York, USA",
      type: "Full time",
      salary: "$550/Mo",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Facebook",
      location: "Seattle, USA",
      type: "Full time",
      salary: "$600/Mo",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "Instagram",
      location: "Miami, USA",
      type: "Remote",
      salary: "$520/Mo",
    },
    {
      id: 5,
      title: "Backend Engineer",
      company: "Microsoft",
      location: "Boston, USA",
      type: "Full time",
      salary: "$700/Mo",
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, USA",
      type: "Hybrid",
      salary: "$800/Mo",
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Austin, USA",
      type: "Full time",
      salary: "$650/Mo",
    },
    {
      id: 8,
      title: "Product Manager",
      company: "Twitter",
      location: "San Francisco, USA",
      type: "Full time",
      salary: "$750/Mo",
    },
    {
      id: 9,
      title: "QA Engineer",
      company: "LinkedIn",
      location: "Chicago, USA",
      type: "Remote",
      salary: "$480/Mo",
    },
    {
      id: 10,
      title: "Full Stack Developer",
      company: "Uber",
      location: "Denver, USA",
      type: "Full time",
      salary: "$680/Mo",
    },
    {
      id: 11,
      title: "Cloud Architect",
      company: "Salesforce",
      location: "Phoenix, USA",
      type: "Remote",
      salary: "$850/Mo",
    },
    {
      id: 12,
      title: "Systems Analyst",
      company: "Adobe",
      location: "Portland, USA",
      type: "Full time",
      salary: "$580/Mo",
    },
    {
      id: 13,
      title: "AI Engineer",
      company: "Tesla",
      location: "Houston, USA",
      type: "Hybrid",
      salary: "$900/Mo",
    },
    {
      id: 14,
      title: "Security Engineer",
      company: "Apple",
      location: "San Diego, USA",
      type: "Full time",
      salary: "$780/Mo",
    },
    {
      id: 15,
      title: "Database Administrator",
      company: "Oracle",
      location: "Dallas, USA",
      type: "Remote",
      salary: "$630/Mo",
    },
    {
      id: 16,
      title: "Technical Lead",
      company: "Spotify",
      location: "Atlanta, USA",
      type: "Full time",
      salary: "$820/Mo",
    },
    {
      id: 17,
      title: "Android Developer",
      company: "Snapchat",
      location: "Nashville, USA",
      type: "Hybrid",
      salary: "$590/Mo",
    },
    {
      id: 18,
      title: "iOS Developer",
      company: "Pinterest",
      location: "Las Vegas, USA",
      type: "Full time",
      salary: "$610/Mo",
    },
    {
      id: 19,
      title: "ML Engineer",
      company: "Intel",
      location: "Detroit, USA",
      type: "Remote",
      salary: "$870/Mo",
    },
    {
      id: 20,
      title: "Blockchain Developer",
      company: "Coinbase",
      location: "Miami, USA",
      type: "Full time",
      salary: "$920/Mo",
    },
  ];

const JobSearchApp = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Add your refresh logic here
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const [bookmarkScale] = useState(new Animated.Value(1));
  const animateBookmark = () => {
    Animated.sequence([
      Animated.spring(bookmarkScale, {
        toValue: 1.2,
        useNativeDriver: true,
      }),
      Animated.spring(bookmarkScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hello, Samantha!</Text>
            <Text style={styles.subGreeting}>Good Morning</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor="#666"
        />
        <TouchableOpacity>
          <Ionicons name="filter" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#f2f2f2", paddingVertical: 12 }}
      >
        <View style={styles.jobListing}>
          {jobListings.map((job, index) => (
            <View
              key={job.id}
              style={[
                styles.jobItem,
                index === 0 && styles.firstJob,
                index === jobListings.length - 1 && styles.lastJob,
              ]}
            >
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.jobLocation}>
                  {job.location} • {job.type}
                </Text>
              </View>
              <View style={styles.jobRight}>
                <TouchableOpacity onPress={animateBookmark}>
                  <Animated.View
                    style={{ transform: [{ scale: bookmarkScale }] }}
                  >
                    <Ionicons name="bookmark-outline" size={20} color="#000" />
                  </Animated.View>
                </TouchableOpacity>
                <Text style={styles.salary}>{job.salary}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bookmark-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 12,
  },
  greeting: {
    fontSize: 23,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 18,
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12, // Increased padding
    backgroundColor: "#f7f7f7",
    borderRadius: 15,
    marginHorizontal: 16,
    marginBottom: 20, // Increased margin
    // shadowColor: "#000", // Added shadow for depth
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },

  jobListing: {
    paddingHorizontal: 16,
  },
  jobItem: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderLeftWidth: 0.8,
    borderRightWidth: 0.8,
    borderColor: "#000",
    borderTopWidth: 0.8,
  },
  firstJob: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopWidth: 0.8, // Only first item gets top border
  },
  lastJob: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomWidth: 0.8, // Only last item gets bottom border
  },
  companyLogo: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 12,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 20, // Slightly reduced
    fontWeight: "700", // Made bolder
    marginBottom: 6,
    color: "#2c3e50", // Added specific color
  },
  companyName: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 6,
    fontWeight: "500", // Added medium weight
  },
  jobLocation: {
    fontSize: 14,
    color: "#7f8c8d",
    fontWeight: "400",
  },
  jobRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  salary: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2B2D42",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  // Add this to your styles
  navItem: {
    padding: 8,
    borderRadius: 8,
  },
  navItemActive: {
    backgroundColor: "#f0f0f0",
  },
  // Add these styles
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#e8f5e9",
    marginTop: 6,
  },
  statusText: {
    fontSize: 12,
    color: "#2e7d32",
    fontWeight: "500",
  },
});

export default JobSearchApp;
