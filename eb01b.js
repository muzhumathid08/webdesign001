  function btnFind_onclick(){
            var pr=0, cr = 0,nr=0;

            var pr=uToFloat(numpr.value);
            var cr=uToFloat(numcr.value);
            
            if(cr<0){
              alert('Invalid cr');
            } else if(pr<0) {
              alert('Invalid pr');
            } else if(pr > cr) {
              alert('Invalid pr/cr');
           }
            nr = cr - pr;

            numnr.value = nr;

        var puau100=0,puau200=0,puau400=0,puaa400=0,mc=0,tip=0;
            cc = cmbbxcc.value;

            if(cc=='Agriculture') {
              puau100=0.50;
              puau200=1.00;
              puau400=1.50;
              puaa400=2.00;
              mc=12.50;
              tip=1.00;
            } else if(cc=='Domestic') {
              puau100=1.00;
              puau200=1.50;
              puau400=2.00;
              puaa400=2.50;
              mc=25.00;
              tip=1.50;
            } else if(cc=='Commercial') {
              puau100=2.00;
              puau200=3.00;
              puau400=4.00;
              puaa400=5.00;
              mc=200.00;
              tip=2.00;
            }

            cmbbxcc.value = cc;

        var cuu100=0,cuu200=0,cuu400=0, cua400=0, cuau100=0,cuau200=0,cuau400=0, cuaa400=0,tia=0,np=0;

        if(nr<=100){
          cuu100 = nr;
        } else if(nr<=200) {
          cuu100 = 100;
          cuu200 = nr - 100;
        } else if(nr<=400) {
          cuu100 = 100;
          cuu200 = 100;
          cuu400 = nr - 200;
        }else if(nr>400) {
          cuu100 = 100;
          cuu200 = 100;
          cuu400 = 200;
          cua400 = nr - 400;
        }

        cuau100 = puau100 * cuu100;
        cuau200 = puau200 * cuu200;
        cuau400 = puau400 * cuu400;
        cuaa400 = puaa400 * cua400;

        tia = tip/100 * cuaa400;

        np = cuau100 + cuau200 + cuau400 + cuaa400 + tia + mc;

            
            numpuau100.value = puau100;
            numpuau200.value = puau200;
            numpuau400.value = puau400;
            numpuaa400.value = puaa400;
            numcuu100.value = cuu100;
            numcuu200.value = cuu200;
            numcuu400.value = cuu400;
            numcua400.value = cua400;
            numcuau100.value = cuau100;
            numcuau200.value = cuau200;
            numcuau400.value = cuau400;
            numcuaa400.value = cuau400;
            nummc.value = mc;
            numtip.value = tip;
            numtia.value = tia;
            numnp.value = np;
      }