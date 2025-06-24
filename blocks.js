// Buzzer Block
Blockly.defineBlocksWithJsonArray([

    
  {
    "type": "buzzer_control",
    "message0": "Turn buzzer %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "STATE",
        "options": [
          ["ON", "HIGH"],
          ["OFF", "LOW"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "Control buzzer",
    "helpUrl": ""
  },
//led
  {
    "type": "led_control",
    "message0": "Turn LED %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "STATE",
        "options": [
          ["ON", "HIGH"],
          ["OFF", "LOW"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Turn an LED on or off",
    "helpUrl": ""
  },

  // Button Input Block
  {
    "type": "button_read",
    "message0": "Button state on pin %1",
    "args0": [
      {
        "type": "field_number",
        "name": "PIN",
        "value": 2,
        "min": 0
      }
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Reads a digital button input",
    "helpUrl": ""
  },

  // Delay Block
  {
    "type": "delay_ms",
    "message0": "Wait %1 milliseconds",
    "args0": [
      {
        "type": "field_number",
        "name": "DELAY",
        "value": 1000,
        "min": 0
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Delay in milliseconds",
    "helpUrl": ""
  },
  {
    "type": "analog_read",
    "message0": "Analog read from pin %1",
    "args0": [
      {
        "type": "field_number",
        "name": "PIN",
        "value": 34,
        "min": 0
      }
    ],
    "output": "Number",
    "colour": 290,
    "tooltip": "Reads an analog input (0-4095)",
    "helpUrl": ""
  },

  // Analog Write
  {
    "type": "analog_write",
    "message0": "Analog write to pin %1 value %2",
    "args0": [
      {
        "type": "field_number",
        "name": "PIN",
        "value": 25
      },
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 128,
        "min": 0,
        "max": 255
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Writes a PWM analog output (0-255)",
    "helpUrl": ""
  },

  // OLED Print
  {
    "type": "oled_print",
    "message0": "OLED print %1",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "Print text to OLED screen",
    "helpUrl": ""
  },
   {
                "type": "buzzer_control",
                "message0": "Turn buzzer %1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "STATE",
                        "options": [
                            ["ON", "HIGH"],
                            ["OFF", "LOW"]
                        ]
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "Control buzzer",
                "helpUrl": ""
            },
            {
                "type": "led_control",
                "message0": "Turn LED %1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "STATE",
                        "options": [
                            ["ON", "HIGH"],
                            ["OFF", "LOW"]
                        ]
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "Turn an LED on or off",
                "helpUrl": ""
            },
            {
                "type": "button_read",
                "message0": "Button state on pin %1",
                "args0": [
                    {
                        "type": "field_number",
                        "name": "PIN",
                        "value": 2,
                        "min": 0
                    }
                ],
                "output": "Boolean",
                "colour": 20,
                "tooltip": "Reads a digital button input",
                "helpUrl": ""
            },
            {
                "type": "delay_ms",
                "message0": "Wait %1 milliseconds",
                "args0": [
                    {
                        "type": "field_number",
                        "name": "DELAY",
                        "value": 1000,
                        "min": 0
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "Delay in milliseconds",
                "helpUrl": ""
            },
            {
                "type": "analog_read",
                "message0": "Analog read from pin %1",
                "args0": [
                    {
                        "type": "field_number",
                        "name": "PIN",
                        "value": 34,
                        "min": 0
                    }
                ],
                "output": "Number",
                "colour": 20,
                "tooltip": "Reads an analog input (0-4095)",
                "helpUrl": ""
            },
            {
                "type": "analog_write",
                "message0": "Analog write to pin %1 value %2",
                "args0": [
                    {
                        "type": "field_number",
                        "name": "PIN",
                        "value": 25
                    },
                    {
                        "type": "field_number",
                        "name": "VALUE",
                        "value": 128,
                        "min": 0,
                        "max": 255
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "Writes a PWM analog output (0-255)",
                "helpUrl": ""
            },
            {
                "type": "oled_print",
                "message0": "OLED print %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "Print text to OLED screen",
                "helpUrl": ""
            },// Analog & PWM Blocks
            {
                "type": "analog_read",
                "message0": "Analog read from pin %1",
                "args0": [{"type": "field_number", "name": "PIN", "value": 34, "min": 0}],
                "output": "Number", "colour": 290,
                "tooltip": "Reads an analog input (0-4095)"
            },
            {
                "type": "analog_write",
                "message0": "Analog write to pin %1 value %2",
                "args0": [
                    {"type": "field_number", "name": "PIN", "value": 25},
                    {"type": "field_number", "name": "VALUE", "value": 128, "min": 0, "max": 255}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 290,
                "tooltip": "Writes a PWM analog output (0-255)"
            },
            {
                "type": "pwm_control",
                "message0": "PWM pin %1 duty cycle %2",
                "args0": [
                    {"type": "input_value", "name": "PIN", "check": "Number"},
                    {"type": "input_value", "name": "DUTY", "check": "Number"}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 290,
                "tooltip": "Control PWM output"
            },
            {
                "type": "servo_control",
                "message0": "Move servo on pin %1 to angle %2°",
                "args0": [
                    {"type": "input_value", "name": "PIN", "check": "Number"},
                    {"type": "input_value", "name": "ANGLE", "check": "Number"}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 290,
                "tooltip": "Control servo motor angle (0-180°)"
            },
            {
                "type": "map_value",
                "message0": "Map %1 from range %2 - %3 to %4 - %5",
                "args0": [
                    {"type": "input_value", "name": "VALUE", "check": "Number"},
                    {"type": "input_value", "name": "FROM_LOW", "check": "Number"},
                    {"type": "input_value", "name": "FROM_HIGH", "check": "Number"},
                    {"type": "input_value", "name": "TO_LOW", "check": "Number"},
                    {"type": "input_value", "name": "TO_HIGH", "check": "Number"}
                ],
                "output": "Number", "colour": 290,
                "tooltip": "Map a value from one range to another"
            },

            // Sensor Blocks
            {
                "type": "ultrasonic_sensor",
                "message0": "Ultrasonic distance (cm) Trig %1 Echo %2",
                "args0": [
                    {"type": "input_value", "name": "TRIG_PIN", "check": "Number"},
                    {"type": "input_value", "name": "ECHO_PIN", "check": "Number"}
                ],
                "output": "Number", "colour": 160,
                "tooltip": "Measure distance with ultrasonic sensor"
            },
            {
                "type": "temperature_sensor",
                "message0": "Temperature (°C) from pin %1",
                "args0": [{"type": "input_value", "name": "PIN", "check": "Number"}],
                "output": "Number", "colour": 160,
                "tooltip": "Read temperature sensor"
            },
            {
                "type": "light_sensor",
                "message0": "Light level from pin %1",
                "args0": [{"type": "input_value", "name": "PIN", "check": "Number"}],
                "output": "Number", "colour": 160,
                "tooltip": "Read light sensor value"
            },
            {
                "type": "motion_sensor",
                "message0": "Motion detected on pin %1",
                "args0": [{"type": "input_value", "name": "PIN", "check": "Number"}],
                "output": "Boolean", "colour": 160,
                "tooltip": "Detect motion with PIR sensor"
            },
            {
                "type": "sound_sensor",
                "message0": "Sound level from pin %1",
                "args0": [{"type": "input_value", "name": "PIN", "check": "Number"}],
                "output": "Number", "colour": 160,
                "tooltip": "Read sound sensor level"
            },
            {
                "type": "gas_sensor",
                "message0": "Gas level from pin %1",
                "args0": [{"type": "input_value", "name": "PIN", "check": "Number"}],
                "output": "Number", "colour": 160,
                "tooltip": "Read gas sensor level"
            },

            // Communication Blocks
            {
                "type": "serial_print",
                "message0": "Serial print %1",
                "args0": [{"type": "input_value", "name": "TEXT"}],
                "previousStatement": null, "nextStatement": null, "colour": 60,
                "tooltip": "Print to serial monitor"
            },
            {
                "type": "serial_println",
                "message0": "Serial print line %1",
                "args0": [{"type": "input_value", "name": "TEXT"}],
                "previousStatement": null, "nextStatement": null, "colour": 60,
                "tooltip": "Print line to serial monitor"
            },
            {
                "type": "serial_read",
                "message0": "Serial read",
                "output": "String", "colour": 60,
                "tooltip": "Read from serial input"
            },
            {
                "type": "wifi_connect",
                "message0": "Connect to WiFi SSID %1 Password %2",
                "args0": [
                    {"type": "input_value", "name": "SSID", "check": "String"},
                    {"type": "input_value", "name": "PASSWORD", "check": "String"}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 60,
                "tooltip": "Connect to WiFi network"
            },
            {
                "type": "bluetooth_send",
                "message0": "Bluetooth send %1",
                "args0": [{"type": "input_value", "name": "DATA"}],
                "previousStatement": null, "nextStatement": null, "colour": 60,
                "tooltip": "Send data via Bluetooth"
            },
            {
                "type": "http_get",
                "message0": "HTTP GET %1",
                "args0": [{"type": "input_value", "name": "URL", "check": "String"}],
                "output": "String", "colour": 60,
                "tooltip": "Make HTTP GET request"
            },

            // Display Blocks
            {
                "type": "oled_print",
                "message0": "OLED print %1",
                "args0": [{"type": "input_value", "name": "TEXT"}],
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Print text to OLED screen"
            },
            {
                "type": "oled_print_xy",
                "message0": "OLED print %1 at x %2 y %3",
                "args0": [
                    {"type": "input_value", "name": "TEXT"},
                    {"type": "input_value", "name": "X", "check": "Number"},
                    {"type": "input_value", "name": "Y", "check": "Number"}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Print text at specific position"
            },
            {
                "type": "oled_clear",
                "message0": "OLED clear screen",
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Clear OLED display"
            },
            {
                "type": "lcd_print",
                "message0": "LCD print %1",
                "args0": [{"type": "input_value", "name": "TEXT"}],
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Print to LCD display"
            },
            {
                "type": "lcd_set_cursor",
                "message0": "LCD set cursor column %1 row %2",
                "args0": [
                    {"type": "input_value", "name": "COL", "check": "Number"},
                    {"type": "input_value", "name": "ROW", "check": "Number"}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Set LCD cursor position"
            },
            {
                "type": "lcd_clear",
                "message0": "LCD clear",
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Clear LCD display"
            },
            {
                "type": "neopixel_color",
                "message0": "NeoPixel pin %1 LED %2 Red %3 Green %4 Blue %5",
                "args0": [
                    {"type": "input_value", "name": "PIN", "check": "Number"},
                    {"type": "input_value", "name": "INDEX", "check": "Number"},
                    {"type": "input_value", "name": "RED", "check": "Number"},
                    {"type": "input_value", "name": "GREEN", "check": "Number"},
                    {"type": "input_value", "name": "BLUE", "check": "Number"}
                ],
                "previousStatement": null, "nextStatement": null, "colour": 210,
                "tooltip": "Set NeoPixel LED color"
            },
]);
