function addRowToTable(type){
if(type=="description"){$("#"+type+"Table").addRow({newRow:'<tr><td colspan="2"><textarea rows="4" cols="47" name="'+type+'Row" class="idleField"></textarea></td>'});
}
else if(type=="contributor"){$("#"+type+"Table").addRow({newRow:'<tr><td colspan="2"><input type="text" name="contributorRow" class="idleField" list="contribList" size="55" /></td></t>'});
}
else if(type=="language"){$("#"+type+"Table").addRow({newRow:'<tr><td colspan="2"><input type="text" name="languageRow" class="idleField" list="langList" size="55" /></td></t>'});
}
else if(type=="format"){$("#"+type+"Table").addRow({newRow:'<tr><td colspan="2"><input type="text" name="formatRow" class="idleField" list="formatList" size="55" /></td></t>'});
}
else{$("#"+type+"Table").addRow({newRow:'<tr><td colspan="2"><input type="text" name="'+type+'Row" size="55" class="idleField"  /></td>'});
}}

function removeRowFromTable(tableID){var rowCount=$("#"+tableID+" tr").length;
if(rowCount>2){$("#"+tableID+"").removeRow({});
}}
