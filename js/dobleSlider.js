(function () {
"use strict";

    init2slider('range', 'rangeBetween', 'btn1', 'btn2', 'inpt1', 'inpt2');

    window.onresize = () =>
      init2slider('range', 'rangeBetween', 'btn1', 'btn2', 'inpt1', 'inpt2');

    function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
      const slider = document.getElementById(idX);
      const between = document.getElementById(btwX);
      const button1 = document.getElementById(btn1X);
      const button2 = document.getElementById(btn2X);
      const inpt1 = document.getElementById(input1);
      const inpt2 = document.getElementById(input2);

      const min = inpt1.min;
      const max = inpt1.max;

      /*initiate*/

      const sliderCoords = getCoords(slider);
      button1.style.marginLeft = '0px';
      button2.style.marginLeft = (slider.offsetWidth - button1.offsetWidth) + 'px';
      between.style.width = (slider.offsetWidth - button1.offsetWidth) + 'px';
      inpt1.value = min;
      inpt2.value = max;

      const inputInitiate = evt => {
        if (parseInt(evt.value) < min)
          evt.value = min;
        if (parseInt(evt.value) > max)
          evt.value = max;
        if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
          const swap = inpt1.value;
          inpt1.value = inpt2.value;
          inpt2.value = swap;
        }
        const sliderCoords = getCoords(slider);
        const per1 = parseInt(inpt1.value - min) * 100 / (max - min);
        const per2 = parseInt(inpt2.value - min) * 100 / (max - min);
        const left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
        const left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

        button1.style.marginLeft = left1 + 'px';
        button2.style.marginLeft = left2 + 'px';

        if (left1 > left2) {
          between.style.width = (left1 - left2) + 'px';
          between.style.marginLeft = left2 + 'px';
        } else {
          between.style.width = (left2 - left1) + 'px';
          between.style.marginLeft = left1 + 'px';
        }
      }

      inpt1.onchange = () =>
        inputInitiate(inpt1);

      inpt2.onchange = () =>
        inputInitiate(inpt2);

      /*mouse*/

        button1.onmousedown = evt => {
          const sliderCoords = getCoords(slider);
          const betweenCoords = getCoords(between);
          const buttonCoords1 = getCoords(button1);
          const buttonCoords2 = getCoords(button2);
          let shiftX2 = evt.pageX - buttonCoords2.left;
          let shiftX1 = evt.pageX - buttonCoords1.left;

          document.onmousemove = evt => {
            let left1 = evt.pageX - shiftX1 - sliderCoords.left;
            let right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;
            button1.style.marginLeft = left1 + 'px';

            shiftX2 = evt.pageX - buttonCoords2.left;
            let left2 = evt.pageX - shiftX2 - sliderCoords.left;
            let right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;

            let per_min = 0;
            let per_max = 0;
            if (left1 > left2) {
              between.style.width = (left1 - left2) + 'px';
              between.style.marginLeft = left2 + 'px';

              per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
              per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
            } else {
              between.style.width = (left2 - left1) + 'px';
              between.style.marginLeft = left1 + 'px';

              per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
              per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
            }
            inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
            inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

          };

          document.onmouseup = () =>
            document.onmousemove = document.onmouseup = null;

          return false;
        };

        button2.onmousedown = evt => {
          const sliderCoords = getCoords(slider);
          const betweenCoords = getCoords(between);
          const buttonCoords1 = getCoords(button1);
          const buttonCoords2 = getCoords(button2);
          let shiftX2 = evt.pageX - buttonCoords2.left;
          let shiftX1 = evt.pageX - buttonCoords1.left;

          document.onmousemove = evt => {
            let left2 = evt.pageX - shiftX2 - sliderCoords.left;
            let right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;
            button2.style.marginLeft = left2 + 'px';

            shiftX1 = evt.pageX - buttonCoords1.left;
            let left1 = evt.pageX - shiftX1 - sliderCoords.left;
            let right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;

            let per_min = 0;
            let per_max = 0;

            if (left1 > left2) {
              between.style.width = (left1 - left2) + 'px';
              between.style.marginLeft = left2 + 'px';
              per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
              per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
            } else {
              between.style.width = (left2 - left1) + 'px';
              between.style.marginLeft = left1 + 'px';
              per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
              per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
            }
            inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
            inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

          };
          document.onmouseup = () =>
            document.onmousemove = document.onmouseup = null;

          return false;
        };

        function getCoords(elem) {
          const box = elem.getBoundingClientRect();
          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
          };
        };
      };
    })()
