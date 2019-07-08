module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['io_analog_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read analog input pin ")
        .appendField(new Blockly.FieldDropdown([
                                            ["A0", "A0"],
                                            ["A1", "A1"],
                                            ["A2", "A2"],
                                            ["A3", "A3"],
                                            ["A4", "A4"],
                                            ["A5", "A5"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(45);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['io_pwm_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PWM write pin")
        .appendField(new Blockly.FieldDropdown([
                                            ["3", "3"],
                                            ["5", "5"],
                                            ["6", "6"],
                                            ["9", "9"],
                                            ["10", "10"],
                                            ["11", "11"]]), "pin");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("write PWM to pin (value 0-255) at 5KHz");
 this.setHelpUrl("https://en.wikipedia.org/wiki/Pulse-width_modulation");
  }
};

};