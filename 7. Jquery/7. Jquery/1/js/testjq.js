$(function() {
	function addRow(direction) {
		var td_len = $('tr:first td').length,
			tr_len = $('tr').length - 1,
			$tr = $('<tr>'),
			className;

		if (direction === 'up') {
			elem = $('tbody');
			$.fn.insertMethod = $.fn.prepend;
			className = 'up';
		}
		if (direction === 'down') {
			elem = $('tbody');
			$.fn.insertMethod = $.fn.append;
			className = 'down';
		}
		if (direction === 'center') {
			elem = $('tr').eq(Math.round(tr_len / 2));
			$.fn.insertMethod = $.fn.before;
			className = 'center-r';
		}

		while (td_len > 0) {
			$tr.append($('<td>').addClass(className));
			td_len--;
		}

		elem.insertMethod($tr);
	}


	function addCellRight() {
		$('tr').each(function(index, elem) {
			$(elem).append($('<td>').addClass('right'));
		});
	}

	function addCellLeft() {
		$('tr').each(function(index, elem) {
			$(elem).prepend($('<td>').addClass('left'));
		});
	}

	function addCellCenter() {
		var len = $('tr:first td').length - 1;
		$('tr').each(function(index, elem) {
			$(elem).children().eq(Math.round(len / 2))
				.before($('<td>').addClass('center-c'));
		});
	}



	$('#btn-up').on('click', function() {
		addRow('up');
	});
	$('#btn-down').on('click', function() {
		addRow('down');
	});
	$('#btn-row-center').on('click', function() {
		addRow('center');
	});
	$('#btn-right').on('click', addCellRight);
	$('#btn-left').on('click', addCellLeft);
	$('#btn-coll-center').on('click', addCellCenter);

});