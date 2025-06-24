Blockly.Python = Blockly.Python || {};

Blockly.Python['led_control'] = function (block) {
  var state = block.getFieldValue('STATE') === 'HIGH' ? '1' : '0';
  return `pin.value(${state})\n`;
};

Blockly.Python['delay_seconds'] = function (block) {
  var seconds = block.getFieldValue('SECONDS');
  return `time.sleep(${seconds})\n`;
};

Blockly.Python['forever_loop'] = function (block) {
  var statements = Blockly.Python.statementToCode(block, 'DO');
  return `while True:\n${Blockly.Python.prefixLines(statements, '  ')}`;
};
