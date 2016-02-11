MicroWorldTour
==============

A very simple static website to track where people have used micro:bit devices
to contribute code to the MicroPython project.

The website is hosted here:

http://microworldtour.github.io/

We have a mailing list: microbit@python.org

To post to it you need to join here:

https://mail.python.org/mailman/listinfo/microbit

How To Contribute
-----------------

All contributions are done via pull requests to this repository. If you are
unsure how to do this, please contact Nicholas (http://ntoll.org/contact).

To be considered as a recipient you need to add yourself to the
``waitinglist.rst`` file in this repository (instructions are found therein)
as a pull request.

The choice of the next recipient is completely the decision of the current
recipient but they *must* be a person found on the waiting list (see above).
Feel free to encourage friends to sign up!

To pass on the micro:bit contact the person you have chosen as the next
recipient and ask for two things:

* Confirmation that they will complete some work within a week of getting the device. If they sound unsure, choose someone else. These devices are so rare that we must get them into the hands of people who will *do something* in a timely manner.
* Their postal address. :-)

Before you post the device you should create a pull request that changes two
files: ``the_name_of_your_microbit.js`` and ``the_name_of_your_microbit.html``.

In the JavaScript file you need to add a new object to the end of the array
found within the file. The object *must* be of the following form::

    {
        popup: "A short description of what you did. Rule of thumb: tweetable.",
        lonLat: [52.133597, -0.990607],
        options: {
            icon: name_of_microbit_icon
        }
    }

Please make sure you update the values to ones appropriate for yourself.

In the HTML file you should add a new entry to the top of the "content" div (it
should be marked as an HTML comment). Your entry *must* be of the following
form::

    <div class="entry">
      <div class="headline"> <!-- Contains details of recipient -->
        <img src="http://a.link.to/a/medium/size/avatar.png" alt="A picture of Firstname" />
        <p>
          <span class="name">Firstname Lastname</span>
          <span class="location">Town, Country.</span>
        </p>
        <p>
          <span class="date">Dayoftheweek, Nth Month 2015</span>
        </p>
      </div>
      <div class="log"> <!-- Contains a log of the results -->
        <!--
          Whatever HTML you want to add here that consists of your log entry. Feel
          free to embed videos, images, links to resources. Make sure it's fun and
          please try to write for a non-technical audience.

          I may ask for revisions for the purposes of editing style or typo
          correction during the pull request process.

          However, this is basically your place to delight, entertain and educate
          us with what you've been up to.

          :-)
        -->
      </div>
    </div>

Once again, modify the values used above to reflect your own contribution.

If necessary, please feel free to contribute changes to the design via the CSS.
If you're unsure please take a look at how it's already been done on the live
website.

It's a very simple site (on purpose), so shouldn't be too hard to navigate.

Best of luck!

Nicholas and Damien.
