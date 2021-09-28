<?php 
//Uses courseName (from the client) 
// to delete a course's references from courses, questions, records and students tables

session_start();
$returnState = new stdClass();

if(isset($_SESSION["DBCONNECTION"]))
{
    $courseName = $_POST["courseName"];
    include("helper/connectToDB.php");
    $conn = connectToDB();

    // prepare and bind
    $stmt = $conn->prepare("CALL mathtutor.deleteCourse(?);");
    $stmt->bind_param("s", $courseName);

    //execute and receive query results
    $stmt->execute();

    $stmt->close();
    $conn->close();
}

$returnState -> success = isset($_SESSION["DBUN"]) && isset($_SESSION["DBPW"]) && isset($_SESSION["DBLC"]);
echo json_encode($returnState);

?>