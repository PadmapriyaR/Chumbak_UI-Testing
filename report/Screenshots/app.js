angular.module('reportingApp', [])
    .controller('ScreenshotReportController', function() {
        this.getParent = function(str) {
            var arr = str.split('|');
            str = "";
            for(var i=arr.length-1; i>0; i--) {
                str += arr[i] + " > ";
            }
            return str.slice(0, -3);
        };
        this.getShortDescription = function(str) {
            return str.split('|')[0];
        };
        this.nToBr = function(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        };
        this.getFilename = function(str) {
            return str.replace(/^.*[\\\/]/, '');
        };
        this.passCount = function() {
            var passCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(result.passed) passCount++;
            }
            return passCount;
        };
        this.pendingCount = function() {
            var pendingCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(result.pending) pendingCount++;
            }
            return pendingCount;
        };
        this.failCount = function() {
            var failCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(!result.passed && !result.pending) failCount++;
            }
            return failCount;
        };
        this.results =
[{"description":"Get count from Fashion and Home lists|Testing Angular site","passed":true,"pending":false,"os":"ANY","sessionId":"147db357-51b4-45e6-a16b-ed5fc87ff3e5","browser":{"name":"firefox"},"message":"Passed.","trace":"","screenShotFile":"0031006d-001d-0072-00c3-002e00660067.png"},{"description":"Navigate to First item(Tops & Blouses) from Fashion and verify the title|Testing Angular site","passed":true,"pending":false,"os":"ANY","sessionId":"147db357-51b4-45e6-a16b-ed5fc87ff3e5","browser":{"name":"firefox"},"message":"Passed.","trace":"","screenShotFile":"009d0070-0068-0019-008a-005e000f0048.png"},{"description":"Scroll down to see Feedback button|Testing Angular site","passed":true,"pending":false,"os":"ANY","sessionId":"147db357-51b4-45e6-a16b-ed5fc87ff3e5","browser":{"name":"firefox"},"message":"Passed.","trace":"","screenShotFile":"00b500ea-00e5-00c8-0057-008300a000b7.png"},{"description":"Login Field validation|Testing Angular site","passed":true,"pending":false,"os":"ANY","sessionId":"147db357-51b4-45e6-a16b-ed5fc87ff3e5","browser":{"name":"firefox"},"message":"Passed.","trace":"","screenShotFile":"006500e4-0053-0096-007a-00f8005f00b6.png"}];
    });