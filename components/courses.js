import react from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { DataTable } from "react-native-paper";

function Courses({ courses }) {
	console.log(courses);
	return (
		<>
			<View style={styles.header_table}>
				<Text style={styles.cell_course_code}>Course Code</Text>
				<Text style={styles.cell_coursename}>Course Name</Text>
				<Text style={styles.cell_credit}>Course Credit</Text>
				<Text style={styles.cell_grade}>Course grade</Text>
			</View>

			{courses.map((obj, index) => {
				return (
					<View style={styles.table_rows} key={index}>
						<Text style={styles.cell_course_code}>{obj.course_code}</Text>
						<Text style={styles.cell_coursename}>{obj.course_name}</Text>
						<Text style={styles.cell_credit}> {obj.course_credits}</Text>
						<Text style={styles.cell_grade}>{obj.course_grade}</Text>
					</View>
				);
			})}
		</>
	);
}
export default Courses;
const styles = StyleSheet.create({
	header_table: {
		flexDirection: "row",
		flexWrap: "wrap",
		borderWidth: 1,
		backgroundColor: "lightblue",
		margin: 5,
	},
	table_rows: {
		flexDirection: "row",
		margin: 5,
	},
	cell_course_code: {
		flex: 0.4,
	},
	cell_coursename: {
		flex: 0.6,
		flexWrap: "wrap",
		margin: 5,
	},
	cell_credit: {
		flex: 0.4,
		textAlign: "center",
	},
	cell_grade: {
		flex: 0.5,
		textAlign: "center",
	},
});
