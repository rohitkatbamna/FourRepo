import react from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

function Courses({ courses }) {
	console.log(courses);
	return (
		<ScrollView horizontal={true}>
			<DataTable>
				<DataTable.Header style={styles.tableHeader}>
					<DataTable.Title style={styles.cell_course}>
						Course Code
					</DataTable.Title>
					<DataTable.Title style={styles.cell_coursename}>
						Course Name
					</DataTable.Title>
					<DataTable.Title style={styles.cell_credit}>
						Course Credit
					</DataTable.Title>
					<DataTable.Title style={styles.cell_grade}>Grade</DataTable.Title>
				</DataTable.Header>
				{courses.map((obj) => {
					return (
						<DataTable.Row style={styles.cell_credit}>
							<DataTable.Cell style={styles.cell_course}>
								{obj.course_code}
							</DataTable.Cell>
							<DataTable.Cell style={styles.cell_coursename}>
								{obj.course_name}
							</DataTable.Cell>
							<DataTable.Cell style={styles.cell_credit}>
								{obj.course_credits}
							</DataTable.Cell>
							<DataTable.Cell style={styles.cell_grade}>
								{obj.course_grade}
							</DataTable.Cell>
						</DataTable.Row>
					);
				})}
			</DataTable>
		</ScrollView>
	);
}
export default Courses;
const styles = StyleSheet.create({
	tableHeader: {
		backgroundColor: "lightblue",
	},
	cell_course: {
		flex: 2,
	},
	cell_coursename: {
		flex: 5,
	},
	cell_credit: {
		justifyContent: "center",
		flex: 2,
	},
	cell_grade: {
		flex: 1,
	},
});
