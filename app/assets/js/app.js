$(document).ready(function() {
  var $message = $('#message'),
    $navigation = $('#navigation'),
    $wrapper = $('#wrapper'),
    iframes = {};

  // TODO: Show loading indicator, with message. Should you show a progress bar?
  $.ajax({
    dataType: 'jsonp',
    jsonpCallback: 'c',
    success: function(response) {
      var hide = [];

      $.each(response, function(i, iframe) {
        var id = iframe.name.toLowerCase().replace(/ /g, '-');

        iframes[id] = iframe;

        $navigation.append('' +
          '<li>' +
             '<button class="' + (i === 0 ? 'active ' : '') + 'btn btn-block btn-lg btn-primary" id="btn-' + id + '">' + iframe.name + '</button>' +
          '</li>' +
        '');
        $wrapper.append('' +
          '<iframe id="' + id + '" src="' + iframe.url + '"></div>' +
        '');

        if (i > 0) {
          hide.push(id);
        }

        if (i === 0 && iframe.message) {
          $message.html('<p>' + iframe.message + '</p>');
        }
      });
      $('.btn-block').on('click', function() {
        var $this = $(this);

        if (!$this.hasClass('active')) {
          var id = $this.attr('id').replace('btn-', ''),
            message = null;

          $('.btn-block').removeClass('active');
          $this.addClass('active');
          $('iframe').hide();
          $('#' + id).show();

          if (iframes[id].message) {
            message = iframes[id].message;
          }

          $message.html(message);
        }
      });

      setTimeout(function() {
        $.each(hide, function(i, div) {
          $(div).css('display', 'none');
        });
      }, 1000);
    },
    url: 'https://www.nps.gov/maps/yell/live/kiosk/iframes.json'
  });
});
// Disable Chrome pinch zoom: https://stackoverflow.com/a/29994607.
document.addEventListener('mousewheel', function(e) {
  if (e.deltaY % 1 !== 0) {
    e.preventDefault();
  }
});
