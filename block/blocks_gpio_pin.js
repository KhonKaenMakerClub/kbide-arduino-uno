module.exports = function(Blockly) {
  'use strict';

  Blockly.Blocks['gpio_analog_pin'] = {
    init: function() {
      this.appendDummyInput().
      appendField("Analog pin ").
      appendField(new Blockly.FieldDropdown([
                                              ["A0", "A0"],
                                              ["A1", "A1"],
                                              ["A2", "A2"],
                                              ["A3", "A3"],
                                              ["A4", "A4"],
                                              ["A5", "A5"]]), "pin");
      this.setOutput(true, "AnalogPIN");
      this.setColour(180);
      this.setTooltip("Analog pin");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_pwm_pin'] = {
    init: function() {
      this.appendDummyInput().
      appendField("PWM pin ").
      appendField(new Blockly.FieldDropdown([
                                              ["3", "3"],
                                              ["5", "5"],
                                              ["6", "6"],
                                              ["9", "9"],
                                              ["10", "10"],
                                              ["11", "11"]]), "pin");
      this.setOutput(true, "PWMPIN");
      this.setColour(180);
      this.setTooltip("PWM pin");
      this.setHelpUrl("");
    }
  };
};