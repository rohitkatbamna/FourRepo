import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Button,
	Alert,
} from "react-native";

import test from "./assets/test.json";
import Term from "./components/term";

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.vut}>Vijaybhoomi University Transcript</Text>
			</View>
			<View style={styles.name_details}>
				<Text style={styles.text_name}>
					Name :
					<Text style={styles.span_test}>
						{" "}
						{test.first_name} {test.last_name}
					</Text>
				</Text>
				<Text style={styles.text_name}>
					Program : <Text style={styles.span_test}>{test.program_name}</Text>
				</Text>
				<Text style={styles.text_name}>
					Roll No. <Text style={styles.span_test}>{test.roll_number}</Text>
				</Text>
			</View>
			<ScrollView
				alwaysBounceHorizontal={false}
				alwaysBounceVertical={false}
				bounces={false}>
				<Term levels={test.levels} />
			</ScrollView>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
	},
	name_details: {
		flexDirection: "row",
		flexWrap: "wrap",
		borderWidth: "4",
		margin: 10,
	},
	text_name: {
		marginLeft: 5,
		fontSize: 15,
	},
	logo: {
		width: "70%",
		height: "20%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	vut: {
		margin: 10,
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	span_test: {
		fontWeight: "bold",
	},
});
