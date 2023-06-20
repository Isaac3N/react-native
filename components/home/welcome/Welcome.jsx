import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Isaac</Text>
				<Text style={styles.welcomeMessage}>Find your perfect Job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput style={styles.searchInput} />
				</View>
			</View>
		</View>
	);
};

export default Welcome;
