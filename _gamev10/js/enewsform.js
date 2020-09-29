var EnewsForm = function (form) {
	var _request;
	var _form = form;
	var _timeoutSecs = 8;
	var _submitting = false;
	var _endpoint = 'https://www.calacademy.org/mailjet-client-proxy';

	var _getValueFromQuery = function (variableName) {
		var query = document.location.search;
		var arr = query.substring(1, query.length).split('&');
		var i = arr.length;

		while (i--) {
			var pairArr = arr[i].split('=');

			if (pairArr[0] == variableName) {
				return pairArr[1];
				break;
			}
		}

		return false;
	}

	var _onSuccess = function (data) {
		if (data.error) {
			_error(data.error);
		} else {
			console.log('EnewsForm._onSuccess');

			$('#emailHeader').text("Success!  Your reward is on its way!");
			$('#emailSubTitle').hide();
			_form.hide();
		}

		// gets reset on page refresh
		// _submitting = false;
	}

	var _onError = function () {
		_error();
		_submitting = false;
	}

	var _error = function (msg) {
		if (typeof(msg) == 'undefined') {
			msg = 'The server encountered an unknown error.';
		}

		console.log('EnewsForm._error');

		$('#emailHeader').html('Oops. ' + msg + '<br />Please try again.');
	}

	var _onSubmit = function () {
		console.log('EnewsForm._onSubmit');

		if (_submitting) return false;

		_submitting = true;
		if (_request) _request.abort();

		// validate blank email
		var myEmail = $('#contact_fields_email').val().trim();

		if (myEmail == '') {
			_submitting = false;
			return false;
		}

		// rocky reef mailjet list
		var listIds = [10233915];

		// opt-in for enews updates
		if ($('#academy_updates').is(':checked')) {
			listIds.push(3);
		}

		// Look for Sea Stars: 1
		// Discover Sea Slugs: 2
		// Search for Snails: 3
		var gameVersion = parseInt(_getValueFromQuery('G'));

		if (isNaN(gameVersion)) {
			gameVersion = 0;
		}

		var myData = {
			callback: '_jqjsp',
			subscribe: 1,
			email: myEmail,
			list_ids: listIds.join(','),
			collection_point: 'rockyreef'
		};

		$('#contact_fields_email').blur();

		_request = $.jsonp({
			url: _endpoint,
			timeout: _timeoutSecs * 1000,
			data: myData,
			success: _onSuccess,
			error: _onError
		});

		return false;
	}

	var _onClick = function () {
		jsKeyboard.focus('#contact_fields_email');
		clean('#contact_fields_email');
		return false;
	}

	this.isSubmitting = function () {
		return _submitting;
	}

	this.initialize = function () {
		console.log('EnewsForm.initialize');

		$('#contact_fields_email').on('click', _onClick);
		_form.on('submit', _onSubmit);

		setTimeout(function () {
			$('#keyboard .button_enter, #signup-submit').on('click', _onSubmit);
		}, 1000);
	}

	this.initialize();
}
