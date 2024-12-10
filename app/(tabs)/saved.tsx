import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  RefreshControl,
} from "react-native";
import Header from "@/components/header";
import { getTimeOfDay } from "@/libs/gettimeofday";
import { SearchBar } from "@/components/searchbar";
import { JobListing } from "@/components/joblist";

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
  const [setQuery, setSearchQuery] = useState("");
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // TODO: add refresh logic
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
  const handleSearch = (text: string) => {
    setSearchQuery(text);
    //TODO: Implement search logic here
  };

  const handleFilter = () => {
    // TODO: Implement filter logic here
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header name="Nikhil" subGreeting={`Good ${getTimeOfDay()}`} />
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#f2f2f2", paddingVertical: 12 }}
      >
        <View style={styles.jobListing}>
          {jobListings.map((job, index) => (
            <JobListing
              key={job.id}
              job={job}
              isFirst={index === 0}
              isLast={index === jobListings.length - 1}
              onBookmark={animateBookmark}
              bookmarkScale={bookmarkScale}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  jobListing: {
    paddingHorizontal: 16,
  },
});

export default JobSearchApp;
