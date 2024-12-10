// types.ts
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
}

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface JobListingProps {
  job: Job;
  isFirst: boolean;
  isLast: boolean;
  onBookmark: () => void;
  bookmarkScale: Animated.Value;
}

export const JobListing: React.FC<JobListingProps> = ({
  job,
  isFirst,
  isLast,
  onBookmark,
  bookmarkScale,
}) => {
  return (
    <View
      style={[
        styles.jobItem,
        isFirst && styles.firstJob,
        isLast && styles.lastJob,
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
        <TouchableOpacity onPress={onBookmark}>
          <Animated.View style={{ transform: [{ scale: bookmarkScale }] }}>
            <Ionicons name="bookmark-outline" size={20} color="#000" />
          </Animated.View>
        </TouchableOpacity>
        <Text style={styles.salary}>{job.salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // JobListing styles
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#f7f7f7",
    borderRadius: 15,
    marginHorizontal: 16,
    marginBottom: 20,
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
    marginBottom: 20,
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
});
