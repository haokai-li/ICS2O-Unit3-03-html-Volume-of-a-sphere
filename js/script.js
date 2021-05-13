// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Volume-of-a-sphere

"use strict"

function enterClicked() {
  // This function get L and W and h and calculate and show it back

  //input
  const radius = parseFloat(document.getElementById("radius").value)
  // process
  const volume = 4 / 3 * 3.1415926535897932384626433 * radius * radius * radius

  //output
  document.getElementById('answer').innerHTML = 'Volume≈ ' + volume.toFixed(2) + 'cm³'
}