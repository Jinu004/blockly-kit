Blockly.Arduino = Blockly.Arduino || {};

Blockly.Arduino['led_control'] = function(block) {
  var state = block.getFieldValue('STATE');
  var code = 'digitalWrite(LED_PIN, ' + state + ');\n';
  return code;
};
Blockly.Arduino = Blockly.Arduino || {};

// Buzzer Control Generator
Blockly.Arduino['buzzer_control'] = function(block) {
  var state = block.getFieldValue('STATE');
  var code = 'digitalWrite(BUZZER_PIN, ' + state + ');\n';
  return code;
};

// Button Read Generator
Blockly.Arduino['button_read'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return ['digitalRead(' + pin + ')', Blockly.Arduino.ORDER_ATOMIC];
};

// Delay Generator
Blockly.Arduino['delay_ms'] = function(block) {
  var delayTime = block.getFieldValue('DELAY');
  return 'delay(' + delayTime + ');\n';
};
// Analog Read
Blockly.Arduino['analog_read'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [`analogRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
};

// Analog Write
Blockly.Arduino['analog_write'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var value = block.getFieldValue('VALUE');
  return `analogWrite(${pin}, ${value});\n`;
};

// OLED Print
Blockly.Arduino['oled_print'] = function(block) {
  var input = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';
  return `display.print(${input});\ndisplay.display();\n`;
};
