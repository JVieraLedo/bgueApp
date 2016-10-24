(function (angular) {
    'use strict';

    angular.module('bgue.services').factory('saveData', ['$http', sendData]);
    angular.module('bgue.services').factory('localStorage', [localStorage]);

    /**
     * Service that allows access to sendData when it is ready.
     *
     * @param {!angular.Service} $http
     */
    function sendData($http) {
        this.sendMail = function (a) {
            console.log(a.toEmail);
            var mailJSON = {
                "key": "xxxxxxxxxxxxxxxxxxxxxxx",
                "message": {
                    "html": "" + a.mailBody,
                    "text": "" + a.mailBody,
                    "subject": "" + a.subject,
                    "from_email": "sender@sending.domain.com",
                    "from_name": "Support",
                    "to": [
                        {
                            "email": "" + a.toEmail,
                            "name": "John Doe",
                            "type": "to"
                        }
                    ],
                    "important": false,
                    "track_opens": null,
                    "track_clicks": null,
                    "auto_text": null,
                    "auto_html": null,
                    "inline_css": null,
                    "url_strip_qs": null,
                    "preserve_recipients": null,
                    "view_content_link": null,
                    "tracking_domain": null,
                    "signing_domain": null,
                    "return_path_domain": null
                },
                "async": false,
                "ip_pool": "Main Pool"
            };
            var apiURL = "https://mandrillapp.com/api/1.0/messages/send.json";
            $http.post(apiURL, mailJSON).success(function (data, status, headers, config) {
                alert('successful email send.');
                $scope.form = {};
                console.log('successful email send.');
                console.log('status: ' + status);
                console.log('data: ' + data);
                console.log('headers: ' + headers);
                console.log('config: ' + config);
            }).error(function (data, status, headers, config) {
                console.log('error sending email.');
                console.log('status: ' + status);
            });
        };

        return this.sendMail;
    }

    function localStorage() {

        var service = {
            data: [],
            dataUser: dataUser,
            SaveState: SaveState,
            RestoreState: RestoreState
        };

        function dataUser(data) {
            return service.data.push(data);
        }

        function SaveState() {
            sessionStorage.userService = angular.toJson(service.data);
        }

        function RestoreState() {
            service.data = angular.fromJson(sessionStorage.userService);
        }

        return service;
    }

})(window.angular);