<?
  if($_REQUEST["operand1"] && $_REQUEST["operand2"])
  {
    $op1 = $_REQUEST["operand1"];
    $op2 = $_REQUEST["operand2"];

    echo $op1 / $op2;
  }
  else
  {
    echo "Bad operands format!";
  }
?>